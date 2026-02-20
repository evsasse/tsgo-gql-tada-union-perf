import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3843 } from "./fragment3843";
import type { FragmentToken3844 } from "./fragment3844";

export const FRAGMENT_3845 = gql(`
  fragment Fragment3845 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult3845 = ResultOf<typeof FRAGMENT_3845>;
type FragmentSelf3845 = NonNullable<FragmentResult3845>;

export type FragmentToken3845 =
  | FragmentSelf3845["__typename"]
  | FragmentSelf3845["typenameHint"] | FragmentToken3843 | FragmentToken3844;
