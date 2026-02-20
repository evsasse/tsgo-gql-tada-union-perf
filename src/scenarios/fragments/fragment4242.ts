import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4240 } from "./fragment4240";
import type { FragmentToken4241 } from "./fragment4241";

export const FRAGMENT_4242 = gql(`
  fragment Fragment4242 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult4242 = ResultOf<typeof FRAGMENT_4242>;
type FragmentSelf4242 = NonNullable<FragmentResult4242>;

export type FragmentToken4242 =
  | FragmentSelf4242["__typename"]
  | FragmentSelf4242["typenameHint"] | FragmentToken4240 | FragmentToken4241;
