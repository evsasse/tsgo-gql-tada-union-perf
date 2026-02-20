import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken238 } from "./fragment238";
import type { FragmentToken239 } from "./fragment239";

export const FRAGMENT_240 = gql(`
  fragment Fragment240 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult240 = ResultOf<typeof FRAGMENT_240>;
type FragmentSelf240 = NonNullable<FragmentResult240>;

export type FragmentToken240 =
  | FragmentSelf240["__typename"]
  | FragmentSelf240["typenameHint"] | FragmentToken238 | FragmentToken239;
