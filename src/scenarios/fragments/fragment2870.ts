import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2868 } from "./fragment2868";
import type { FragmentToken2869 } from "./fragment2869";

export const FRAGMENT_2870 = gql(`
  fragment Fragment2870 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult2870 = ResultOf<typeof FRAGMENT_2870>;
type FragmentSelf2870 = NonNullable<FragmentResult2870>;

export type FragmentToken2870 =
  | FragmentSelf2870["__typename"]
  | FragmentSelf2870["typenameHint"] | FragmentToken2868 | FragmentToken2869;
