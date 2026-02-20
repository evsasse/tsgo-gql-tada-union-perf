import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1898 } from "./fragment1898";
import type { FragmentToken1899 } from "./fragment1899";

export const FRAGMENT_1900 = gql(`
  fragment Fragment1900 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult1900 = ResultOf<typeof FRAGMENT_1900>;
type FragmentSelf1900 = NonNullable<FragmentResult1900>;

export type FragmentToken1900 =
  | FragmentSelf1900["__typename"]
  | FragmentSelf1900["typenameHint"] | FragmentToken1898 | FragmentToken1899;
