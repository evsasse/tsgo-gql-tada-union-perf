import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4160 } from "./fragment4160";
import type { FragmentToken4161 } from "./fragment4161";

export const FRAGMENT_4162 = gql(`
  fragment Fragment4162 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult4162 = ResultOf<typeof FRAGMENT_4162>;
type FragmentSelf4162 = NonNullable<FragmentResult4162>;

export type FragmentToken4162 =
  | FragmentSelf4162["__typename"]
  | FragmentSelf4162["typenameHint"] | FragmentToken4160 | FragmentToken4161;
