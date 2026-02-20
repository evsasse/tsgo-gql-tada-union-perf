import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2943 } from "./fragment2943";
import type { FragmentToken2944 } from "./fragment2944";

export const FRAGMENT_2945 = gql(`
  fragment Fragment2945 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult2945 = ResultOf<typeof FRAGMENT_2945>;
type FragmentSelf2945 = NonNullable<FragmentResult2945>;

export type FragmentToken2945 =
  | FragmentSelf2945["__typename"]
  | FragmentSelf2945["typenameHint"] | FragmentToken2943 | FragmentToken2944;
