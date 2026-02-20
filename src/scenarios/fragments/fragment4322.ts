import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4320 } from "./fragment4320";
import type { FragmentToken4321 } from "./fragment4321";

export const FRAGMENT_4322 = gql(`
  fragment Fragment4322 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult4322 = ResultOf<typeof FRAGMENT_4322>;
type FragmentSelf4322 = NonNullable<FragmentResult4322>;

export type FragmentToken4322 =
  | FragmentSelf4322["__typename"]
  | FragmentSelf4322["typenameHint"] | FragmentToken4320 | FragmentToken4321;
