import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4405 } from "./fragment4405";
import type { FragmentToken4406 } from "./fragment4406";

export const FRAGMENT_4407 = gql(`
  fragment Fragment4407 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult4407 = ResultOf<typeof FRAGMENT_4407>;
type FragmentSelf4407 = NonNullable<FragmentResult4407>;

export type FragmentToken4407 =
  | FragmentSelf4407["__typename"]
  | FragmentSelf4407["typenameHint"] | FragmentToken4405 | FragmentToken4406;
