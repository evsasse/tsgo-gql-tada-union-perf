import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4998 } from "./fragment4998";
import type { FragmentToken4999 } from "./fragment4999";

export const FRAGMENT_5000 = gql(`
  fragment Fragment5000 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult5000 = ResultOf<typeof FRAGMENT_5000>;
type FragmentSelf5000 = NonNullable<FragmentResult5000>;

export type FragmentToken5000 =
  | FragmentSelf5000["__typename"]
  | FragmentSelf5000["typenameHint"] | FragmentToken4998 | FragmentToken4999;
