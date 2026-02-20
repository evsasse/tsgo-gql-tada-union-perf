import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4546 } from "./fragment4546";
import type { FragmentToken4547 } from "./fragment4547";

export const FRAGMENT_4548 = gql(`
  fragment Fragment4548 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult4548 = ResultOf<typeof FRAGMENT_4548>;
type FragmentSelf4548 = NonNullable<FragmentResult4548>;

export type FragmentToken4548 =
  | FragmentSelf4548["__typename"]
  | FragmentSelf4548["typenameHint"] | FragmentToken4546 | FragmentToken4547;
