import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1879 } from "./fragment1879";
import type { FragmentToken1880 } from "./fragment1880";

export const FRAGMENT_1881 = gql(`
  fragment Fragment1881 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult1881 = ResultOf<typeof FRAGMENT_1881>;
type FragmentSelf1881 = NonNullable<FragmentResult1881>;

export type FragmentToken1881 =
  | FragmentSelf1881["__typename"]
  | FragmentSelf1881["typenameHint"] | FragmentToken1879 | FragmentToken1880;
