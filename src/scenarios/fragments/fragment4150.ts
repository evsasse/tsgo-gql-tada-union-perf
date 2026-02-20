import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4148 } from "./fragment4148";
import type { FragmentToken4149 } from "./fragment4149";

export const FRAGMENT_4150 = gql(`
  fragment Fragment4150 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult4150 = ResultOf<typeof FRAGMENT_4150>;
type FragmentSelf4150 = NonNullable<FragmentResult4150>;

export type FragmentToken4150 =
  | FragmentSelf4150["__typename"]
  | FragmentSelf4150["typenameHint"] | FragmentToken4148 | FragmentToken4149;
