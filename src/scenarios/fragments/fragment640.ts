import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken638 } from "./fragment638";
import type { FragmentToken639 } from "./fragment639";

export const FRAGMENT_640 = gql(`
  fragment Fragment640 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult640 = ResultOf<typeof FRAGMENT_640>;
type FragmentSelf640 = NonNullable<FragmentResult640>;

export type FragmentToken640 =
  | FragmentSelf640["__typename"]
  | FragmentSelf640["typenameHint"] | FragmentToken638 | FragmentToken639;
