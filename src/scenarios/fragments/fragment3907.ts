import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3905 } from "./fragment3905";
import type { FragmentToken3906 } from "./fragment3906";

export const FRAGMENT_3907 = gql(`
  fragment Fragment3907 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult3907 = ResultOf<typeof FRAGMENT_3907>;
type FragmentSelf3907 = NonNullable<FragmentResult3907>;

export type FragmentToken3907 =
  | FragmentSelf3907["__typename"]
  | FragmentSelf3907["typenameHint"] | FragmentToken3905 | FragmentToken3906;
