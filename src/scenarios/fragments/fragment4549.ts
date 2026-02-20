import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4547 } from "./fragment4547";
import type { FragmentToken4548 } from "./fragment4548";

export const FRAGMENT_4549 = gql(`
  fragment Fragment4549 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult4549 = ResultOf<typeof FRAGMENT_4549>;
type FragmentSelf4549 = NonNullable<FragmentResult4549>;

export type FragmentToken4549 =
  | FragmentSelf4549["__typename"]
  | FragmentSelf4549["typenameHint"] | FragmentToken4547 | FragmentToken4548;
