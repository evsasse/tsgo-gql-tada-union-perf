import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1857 } from "./fragment1857";
import type { FragmentToken1858 } from "./fragment1858";

export const FRAGMENT_1859 = gql(`
  fragment Fragment1859 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult1859 = ResultOf<typeof FRAGMENT_1859>;
type FragmentSelf1859 = NonNullable<FragmentResult1859>;

export type FragmentToken1859 =
  | FragmentSelf1859["__typename"]
  | FragmentSelf1859["typenameHint"] | FragmentToken1857 | FragmentToken1858;
