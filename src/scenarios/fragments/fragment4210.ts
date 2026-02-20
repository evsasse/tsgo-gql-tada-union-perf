import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4208 } from "./fragment4208";
import type { FragmentToken4209 } from "./fragment4209";

export const FRAGMENT_4210 = gql(`
  fragment Fragment4210 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult4210 = ResultOf<typeof FRAGMENT_4210>;
type FragmentSelf4210 = NonNullable<FragmentResult4210>;

export type FragmentToken4210 =
  | FragmentSelf4210["__typename"]
  | FragmentSelf4210["typenameHint"] | FragmentToken4208 | FragmentToken4209;
