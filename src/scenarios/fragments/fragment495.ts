import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken493 } from "./fragment493";
import type { FragmentToken494 } from "./fragment494";

export const FRAGMENT_495 = gql(`
  fragment Fragment495 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult495 = ResultOf<typeof FRAGMENT_495>;
type FragmentSelf495 = NonNullable<FragmentResult495>;

export type FragmentToken495 =
  | FragmentSelf495["__typename"]
  | FragmentSelf495["typenameHint"] | FragmentToken493 | FragmentToken494;
