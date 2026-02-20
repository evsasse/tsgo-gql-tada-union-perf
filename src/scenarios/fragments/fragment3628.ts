import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3626 } from "./fragment3626";
import type { FragmentToken3627 } from "./fragment3627";

export const FRAGMENT_3628 = gql(`
  fragment Fragment3628 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult3628 = ResultOf<typeof FRAGMENT_3628>;
type FragmentSelf3628 = NonNullable<FragmentResult3628>;

export type FragmentToken3628 =
  | FragmentSelf3628["__typename"]
  | FragmentSelf3628["typenameHint"] | FragmentToken3626 | FragmentToken3627;
