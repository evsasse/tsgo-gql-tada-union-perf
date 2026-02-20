import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4362 } from "./fragment4362";
import type { FragmentToken4363 } from "./fragment4363";

export const FRAGMENT_4364 = gql(`
  fragment Fragment4364 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult4364 = ResultOf<typeof FRAGMENT_4364>;
type FragmentSelf4364 = NonNullable<FragmentResult4364>;

export type FragmentToken4364 =
  | FragmentSelf4364["__typename"]
  | FragmentSelf4364["typenameHint"] | FragmentToken4362 | FragmentToken4363;
