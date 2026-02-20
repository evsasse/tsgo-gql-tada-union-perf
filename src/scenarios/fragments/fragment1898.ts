import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1896 } from "./fragment1896";
import type { FragmentToken1897 } from "./fragment1897";

export const FRAGMENT_1898 = gql(`
  fragment Fragment1898 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult1898 = ResultOf<typeof FRAGMENT_1898>;
type FragmentSelf1898 = NonNullable<FragmentResult1898>;

export type FragmentToken1898 =
  | FragmentSelf1898["__typename"]
  | FragmentSelf1898["typenameHint"] | FragmentToken1896 | FragmentToken1897;
