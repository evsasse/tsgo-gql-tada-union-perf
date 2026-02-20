import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken881 } from "./fragment881";
import type { FragmentToken882 } from "./fragment882";

export const FRAGMENT_883 = gql(`
  fragment Fragment883 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult883 = ResultOf<typeof FRAGMENT_883>;
type FragmentSelf883 = NonNullable<FragmentResult883>;

export type FragmentToken883 =
  | FragmentSelf883["__typename"]
  | FragmentSelf883["typenameHint"] | FragmentToken881 | FragmentToken882;
