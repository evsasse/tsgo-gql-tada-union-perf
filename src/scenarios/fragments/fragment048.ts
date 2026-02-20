import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken046 } from "./fragment046";
import type { FragmentToken047 } from "./fragment047";

export const FRAGMENT_048 = gql(`
  fragment Fragment048 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult048 = ResultOf<typeof FRAGMENT_048>;
type FragmentSelf048 = NonNullable<FragmentResult048>;

export type FragmentToken048 =
  | FragmentSelf048["__typename"]
  | FragmentSelf048["typenameHint"] | FragmentToken046 | FragmentToken047;
