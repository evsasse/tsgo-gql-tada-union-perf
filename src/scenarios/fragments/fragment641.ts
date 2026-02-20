import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken639 } from "./fragment639";
import type { FragmentToken640 } from "./fragment640";

export const FRAGMENT_641 = gql(`
  fragment Fragment641 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult641 = ResultOf<typeof FRAGMENT_641>;
type FragmentSelf641 = NonNullable<FragmentResult641>;

export type FragmentToken641 =
  | FragmentSelf641["__typename"]
  | FragmentSelf641["typenameHint"] | FragmentToken639 | FragmentToken640;
