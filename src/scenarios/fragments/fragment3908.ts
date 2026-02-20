import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3906 } from "./fragment3906";
import type { FragmentToken3907 } from "./fragment3907";

export const FRAGMENT_3908 = gql(`
  fragment Fragment3908 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult3908 = ResultOf<typeof FRAGMENT_3908>;
type FragmentSelf3908 = NonNullable<FragmentResult3908>;

export type FragmentToken3908 =
  | FragmentSelf3908["__typename"]
  | FragmentSelf3908["typenameHint"] | FragmentToken3906 | FragmentToken3907;
