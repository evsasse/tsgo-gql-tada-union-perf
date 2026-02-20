import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4552 } from "./fragment4552";
import type { FragmentToken4553 } from "./fragment4553";

export const FRAGMENT_4554 = gql(`
  fragment Fragment4554 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult4554 = ResultOf<typeof FRAGMENT_4554>;
type FragmentSelf4554 = NonNullable<FragmentResult4554>;

export type FragmentToken4554 =
  | FragmentSelf4554["__typename"]
  | FragmentSelf4554["typenameHint"] | FragmentToken4552 | FragmentToken4553;
