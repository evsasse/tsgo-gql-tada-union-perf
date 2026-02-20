import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4455 } from "./fragment4455";
import type { FragmentToken4456 } from "./fragment4456";

export const FRAGMENT_4457 = gql(`
  fragment Fragment4457 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult4457 = ResultOf<typeof FRAGMENT_4457>;
type FragmentSelf4457 = NonNullable<FragmentResult4457>;

export type FragmentToken4457 =
  | FragmentSelf4457["__typename"]
  | FragmentSelf4457["typenameHint"] | FragmentToken4455 | FragmentToken4456;
