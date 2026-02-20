import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4374 } from "./fragment4374";
import type { FragmentToken4375 } from "./fragment4375";

export const FRAGMENT_4376 = gql(`
  fragment Fragment4376 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult4376 = ResultOf<typeof FRAGMENT_4376>;
type FragmentSelf4376 = NonNullable<FragmentResult4376>;

export type FragmentToken4376 =
  | FragmentSelf4376["__typename"]
  | FragmentSelf4376["typenameHint"] | FragmentToken4374 | FragmentToken4375;
