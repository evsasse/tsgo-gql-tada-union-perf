import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4810 } from "./fragment4810";
import type { FragmentToken4811 } from "./fragment4811";

export const FRAGMENT_4812 = gql(`
  fragment Fragment4812 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult4812 = ResultOf<typeof FRAGMENT_4812>;
type FragmentSelf4812 = NonNullable<FragmentResult4812>;

export type FragmentToken4812 =
  | FragmentSelf4812["__typename"]
  | FragmentSelf4812["typenameHint"] | FragmentToken4810 | FragmentToken4811;
