import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken629 } from "./fragment629";
import type { FragmentToken630 } from "./fragment630";

export const FRAGMENT_631 = gql(`
  fragment Fragment631 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult631 = ResultOf<typeof FRAGMENT_631>;
type FragmentSelf631 = NonNullable<FragmentResult631>;

export type FragmentToken631 =
  | FragmentSelf631["__typename"]
  | FragmentSelf631["typenameHint"] | FragmentToken629 | FragmentToken630;
