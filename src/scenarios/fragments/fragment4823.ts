import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4821 } from "./fragment4821";
import type { FragmentToken4822 } from "./fragment4822";

export const FRAGMENT_4823 = gql(`
  fragment Fragment4823 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult4823 = ResultOf<typeof FRAGMENT_4823>;
type FragmentSelf4823 = NonNullable<FragmentResult4823>;

export type FragmentToken4823 =
  | FragmentSelf4823["__typename"]
  | FragmentSelf4823["typenameHint"] | FragmentToken4821 | FragmentToken4822;
