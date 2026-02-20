import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2422 } from "./fragment2422";
import type { FragmentToken2423 } from "./fragment2423";

export const FRAGMENT_2424 = gql(`
  fragment Fragment2424 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult2424 = ResultOf<typeof FRAGMENT_2424>;
type FragmentSelf2424 = NonNullable<FragmentResult2424>;

export type FragmentToken2424 =
  | FragmentSelf2424["__typename"]
  | FragmentSelf2424["typenameHint"] | FragmentToken2422 | FragmentToken2423;
