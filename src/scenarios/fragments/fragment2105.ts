import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2103 } from "./fragment2103";
import type { FragmentToken2104 } from "./fragment2104";

export const FRAGMENT_2105 = gql(`
  fragment Fragment2105 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult2105 = ResultOf<typeof FRAGMENT_2105>;
type FragmentSelf2105 = NonNullable<FragmentResult2105>;

export type FragmentToken2105 =
  | FragmentSelf2105["__typename"]
  | FragmentSelf2105["typenameHint"] | FragmentToken2103 | FragmentToken2104;
