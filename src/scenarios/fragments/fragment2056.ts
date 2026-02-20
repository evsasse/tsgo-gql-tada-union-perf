import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2054 } from "./fragment2054";
import type { FragmentToken2055 } from "./fragment2055";

export const FRAGMENT_2056 = gql(`
  fragment Fragment2056 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult2056 = ResultOf<typeof FRAGMENT_2056>;
type FragmentSelf2056 = NonNullable<FragmentResult2056>;

export type FragmentToken2056 =
  | FragmentSelf2056["__typename"]
  | FragmentSelf2056["typenameHint"] | FragmentToken2054 | FragmentToken2055;
