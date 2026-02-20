import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4411 } from "./fragment4411";
import type { FragmentToken4412 } from "./fragment4412";

export const FRAGMENT_4413 = gql(`
  fragment Fragment4413 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult4413 = ResultOf<typeof FRAGMENT_4413>;
type FragmentSelf4413 = NonNullable<FragmentResult4413>;

export type FragmentToken4413 =
  | FragmentSelf4413["__typename"]
  | FragmentSelf4413["typenameHint"] | FragmentToken4411 | FragmentToken4412;
