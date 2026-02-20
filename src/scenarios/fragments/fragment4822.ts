import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4820 } from "./fragment4820";
import type { FragmentToken4821 } from "./fragment4821";

export const FRAGMENT_4822 = gql(`
  fragment Fragment4822 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult4822 = ResultOf<typeof FRAGMENT_4822>;
type FragmentSelf4822 = NonNullable<FragmentResult4822>;

export type FragmentToken4822 =
  | FragmentSelf4822["__typename"]
  | FragmentSelf4822["typenameHint"] | FragmentToken4820 | FragmentToken4821;
