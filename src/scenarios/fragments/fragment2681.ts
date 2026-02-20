import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2679 } from "./fragment2679";
import type { FragmentToken2680 } from "./fragment2680";

export const FRAGMENT_2681 = gql(`
  fragment Fragment2681 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult2681 = ResultOf<typeof FRAGMENT_2681>;
type FragmentSelf2681 = NonNullable<FragmentResult2681>;

export type FragmentToken2681 =
  | FragmentSelf2681["__typename"]
  | FragmentSelf2681["typenameHint"] | FragmentToken2679 | FragmentToken2680;
