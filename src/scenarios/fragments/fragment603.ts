import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken601 } from "./fragment601";
import type { FragmentToken602 } from "./fragment602";

export const FRAGMENT_603 = gql(`
  fragment Fragment603 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult603 = ResultOf<typeof FRAGMENT_603>;
type FragmentSelf603 = NonNullable<FragmentResult603>;

export type FragmentToken603 =
  | FragmentSelf603["__typename"]
  | FragmentSelf603["typenameHint"] | FragmentToken601 | FragmentToken602;
