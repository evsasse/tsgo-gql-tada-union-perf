import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4383 } from "./fragment4383";
import type { FragmentToken4384 } from "./fragment4384";

export const FRAGMENT_4385 = gql(`
  fragment Fragment4385 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult4385 = ResultOf<typeof FRAGMENT_4385>;
type FragmentSelf4385 = NonNullable<FragmentResult4385>;

export type FragmentToken4385 =
  | FragmentSelf4385["__typename"]
  | FragmentSelf4385["typenameHint"] | FragmentToken4383 | FragmentToken4384;
