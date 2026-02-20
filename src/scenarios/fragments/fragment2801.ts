import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2799 } from "./fragment2799";
import type { FragmentToken2800 } from "./fragment2800";

export const FRAGMENT_2801 = gql(`
  fragment Fragment2801 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult2801 = ResultOf<typeof FRAGMENT_2801>;
type FragmentSelf2801 = NonNullable<FragmentResult2801>;

export type FragmentToken2801 =
  | FragmentSelf2801["__typename"]
  | FragmentSelf2801["typenameHint"] | FragmentToken2799 | FragmentToken2800;
