import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4477 } from "./fragment4477";
import type { FragmentToken4478 } from "./fragment4478";

export const FRAGMENT_4479 = gql(`
  fragment Fragment4479 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult4479 = ResultOf<typeof FRAGMENT_4479>;
type FragmentSelf4479 = NonNullable<FragmentResult4479>;

export type FragmentToken4479 =
  | FragmentSelf4479["__typename"]
  | FragmentSelf4479["typenameHint"] | FragmentToken4477 | FragmentToken4478;
