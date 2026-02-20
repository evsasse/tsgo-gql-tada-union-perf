import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4407 } from "./fragment4407";
import type { FragmentToken4408 } from "./fragment4408";

export const FRAGMENT_4409 = gql(`
  fragment Fragment4409 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult4409 = ResultOf<typeof FRAGMENT_4409>;
type FragmentSelf4409 = NonNullable<FragmentResult4409>;

export type FragmentToken4409 =
  | FragmentSelf4409["__typename"]
  | FragmentSelf4409["typenameHint"] | FragmentToken4407 | FragmentToken4408;
