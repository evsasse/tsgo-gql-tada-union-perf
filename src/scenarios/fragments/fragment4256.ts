import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4254 } from "./fragment4254";
import type { FragmentToken4255 } from "./fragment4255";

export const FRAGMENT_4256 = gql(`
  fragment Fragment4256 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult4256 = ResultOf<typeof FRAGMENT_4256>;
type FragmentSelf4256 = NonNullable<FragmentResult4256>;

export type FragmentToken4256 =
  | FragmentSelf4256["__typename"]
  | FragmentSelf4256["typenameHint"] | FragmentToken4254 | FragmentToken4255;
