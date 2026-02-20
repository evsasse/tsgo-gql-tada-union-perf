import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4935 } from "./fragment4935";
import type { FragmentToken4936 } from "./fragment4936";

export const FRAGMENT_4937 = gql(`
  fragment Fragment4937 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult4937 = ResultOf<typeof FRAGMENT_4937>;
type FragmentSelf4937 = NonNullable<FragmentResult4937>;

export type FragmentToken4937 =
  | FragmentSelf4937["__typename"]
  | FragmentSelf4937["typenameHint"] | FragmentToken4935 | FragmentToken4936;
