import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4158 } from "./fragment4158";
import type { FragmentToken4159 } from "./fragment4159";

export const FRAGMENT_4160 = gql(`
  fragment Fragment4160 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult4160 = ResultOf<typeof FRAGMENT_4160>;
type FragmentSelf4160 = NonNullable<FragmentResult4160>;

export type FragmentToken4160 =
  | FragmentSelf4160["__typename"]
  | FragmentSelf4160["typenameHint"] | FragmentToken4158 | FragmentToken4159;
