import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3812 } from "./fragment3812";
import type { FragmentToken3813 } from "./fragment3813";

export const FRAGMENT_3814 = gql(`
  fragment Fragment3814 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult3814 = ResultOf<typeof FRAGMENT_3814>;
type FragmentSelf3814 = NonNullable<FragmentResult3814>;

export type FragmentToken3814 =
  | FragmentSelf3814["__typename"]
  | FragmentSelf3814["typenameHint"] | FragmentToken3812 | FragmentToken3813;
