import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1926 } from "./fragment1926";
import type { FragmentToken1927 } from "./fragment1927";

export const FRAGMENT_1928 = gql(`
  fragment Fragment1928 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult1928 = ResultOf<typeof FRAGMENT_1928>;
type FragmentSelf1928 = NonNullable<FragmentResult1928>;

export type FragmentToken1928 =
  | FragmentSelf1928["__typename"]
  | FragmentSelf1928["typenameHint"] | FragmentToken1926 | FragmentToken1927;
