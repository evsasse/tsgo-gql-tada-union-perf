import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4822 } from "./fragment4822";
import type { FragmentToken4823 } from "./fragment4823";

export const FRAGMENT_4824 = gql(`
  fragment Fragment4824 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult4824 = ResultOf<typeof FRAGMENT_4824>;
type FragmentSelf4824 = NonNullable<FragmentResult4824>;

export type FragmentToken4824 =
  | FragmentSelf4824["__typename"]
  | FragmentSelf4824["typenameHint"] | FragmentToken4822 | FragmentToken4823;
