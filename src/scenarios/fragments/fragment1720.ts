import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1718 } from "./fragment1718";
import type { FragmentToken1719 } from "./fragment1719";

export const FRAGMENT_1720 = gql(`
  fragment Fragment1720 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult1720 = ResultOf<typeof FRAGMENT_1720>;
type FragmentSelf1720 = NonNullable<FragmentResult1720>;

export type FragmentToken1720 =
  | FragmentSelf1720["__typename"]
  | FragmentSelf1720["typenameHint"] | FragmentToken1718 | FragmentToken1719;
