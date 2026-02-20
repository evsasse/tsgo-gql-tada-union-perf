import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2308 } from "./fragment2308";
import type { FragmentToken2309 } from "./fragment2309";

export const FRAGMENT_2310 = gql(`
  fragment Fragment2310 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult2310 = ResultOf<typeof FRAGMENT_2310>;
type FragmentSelf2310 = NonNullable<FragmentResult2310>;

export type FragmentToken2310 =
  | FragmentSelf2310["__typename"]
  | FragmentSelf2310["typenameHint"] | FragmentToken2308 | FragmentToken2309;
