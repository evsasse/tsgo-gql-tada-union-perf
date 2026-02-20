import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1871 } from "./fragment1871";
import type { FragmentToken1872 } from "./fragment1872";

export const FRAGMENT_1873 = gql(`
  fragment Fragment1873 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult1873 = ResultOf<typeof FRAGMENT_1873>;
type FragmentSelf1873 = NonNullable<FragmentResult1873>;

export type FragmentToken1873 =
  | FragmentSelf1873["__typename"]
  | FragmentSelf1873["typenameHint"] | FragmentToken1871 | FragmentToken1872;
