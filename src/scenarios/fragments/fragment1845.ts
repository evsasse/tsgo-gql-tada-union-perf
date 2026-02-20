import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1843 } from "./fragment1843";
import type { FragmentToken1844 } from "./fragment1844";

export const FRAGMENT_1845 = gql(`
  fragment Fragment1845 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult1845 = ResultOf<typeof FRAGMENT_1845>;
type FragmentSelf1845 = NonNullable<FragmentResult1845>;

export type FragmentToken1845 =
  | FragmentSelf1845["__typename"]
  | FragmentSelf1845["typenameHint"] | FragmentToken1843 | FragmentToken1844;
