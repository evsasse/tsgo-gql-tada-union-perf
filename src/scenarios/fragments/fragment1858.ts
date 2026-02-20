import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1856 } from "./fragment1856";
import type { FragmentToken1857 } from "./fragment1857";

export const FRAGMENT_1858 = gql(`
  fragment Fragment1858 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult1858 = ResultOf<typeof FRAGMENT_1858>;
type FragmentSelf1858 = NonNullable<FragmentResult1858>;

export type FragmentToken1858 =
  | FragmentSelf1858["__typename"]
  | FragmentSelf1858["typenameHint"] | FragmentToken1856 | FragmentToken1857;
